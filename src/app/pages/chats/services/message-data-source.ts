import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { ChatHubService } from "src/app/core/services/chat-hub.service";
import { MessageData, MessageQueryModel, MessageService } from "src/app/core/services/message.service";

export class MessageDataSource extends DataSource<MessageData> {
    private readonly _dataStream = new BehaviorSubject<Array<MessageData>>([]);
    // private loadingSubject = new BehaviorSubject<boolean>(false);

    // public loading$ = this.loadingSubject.asObservable();

    // private isLoadedAllSubject = new BehaviorSubject<boolean>(false);
    // public isLoadedAll$ = this.isLoadedAllSubject.asObservable();

    public isLoading = false;
    public isLastPage = false;
    public totalCount = 0;
    private pageIndex = 1;
    private pageSize = 10;

    connect(collectionViewer: CollectionViewer): Observable<readonly MessageData[]> {
        return this._dataStream;
    }
    disconnect(collectionViewer: CollectionViewer) {
        this._dataStream.complete();
    }
    constructor(
        private chatId: string,
        private messageService: MessageService,
        private chatHubService: ChatHubService,
    ) {
        super();
        this.chatHubService.messageObservable.subscribe(msg => {
            if (msg.chatId === this.chatId) {
                this.updateData([msg]);
            }
        });
    }


    updateData(items: MessageData[]) {
        const mergedMessages = new Set([...this._dataStream.value, ...items]);
        this.totalCount = mergedMessages.size;
        this._dataStream.next(Array.from(mergedMessages).sort((a, b) => {
            return b.createdAt - a.createdAt;
        }));
    }

    loadMore() {
        if (this.isLastPage) return;
        this.pageIndex++;
        this.load();
    }

    load() {
        if (this.isLoading) return;
        this.isLoading = true;
        this.messageService.list({
            chatId: this.chatId,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize
        })
            .subscribe({
                next: (res) => {
                    this.isLastPage = res.totalPages <= this.pageIndex;
                    this.updateData(res.items);
                },
                complete: () => {
                    this.isLoading = false;
                }
            })
    }
}