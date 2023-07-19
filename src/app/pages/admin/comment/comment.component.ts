import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Table } from 'primeng/table';
import { IComment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: any;
  cols: any[] = [];
  selectedComments: IComment[] = [];
  constructor(
    private commentService: CommentService,
  ) {
    this.commentService.getAllcomment().subscribe((data: any) => {
      this.comments = data.comments;
      console.log(this.comments)
    });
  }
  ngOnInit() {
    this.commentService.getAllcomment().subscribe((data: any) => {
      this.comments = data.comments
    });
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'username', header: 'username' },
      { field: 'description', header: 'description' },
      { field: 'productId', header: 'productId' },
      { field: 'date', header: 'Date' },
    ];
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}

