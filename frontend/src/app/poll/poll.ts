import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../poll.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.html',
})
export class PollComponent implements OnInit {

  polls: Poll[] = [];

  newPollQuestion: string = '';
  newOptions: string[] = ['', '']; // minimum 2 options

  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls(): void {
    this.pollService.getPolls().subscribe({
      next: (data) => this.polls = data,
      error: (err) => console.error(err)
    });
  }

  addOptionField(): void {
    this.newOptions.push('');
  }

  removeOptionField(index: number): void {
    if (this.newOptions.length > 2) {
      this.newOptions.splice(index, 1);
    }
  }

  createPoll(): void {

    if (!this.newPollQuestion.trim()) return;

    const poll = {
      question: this.newPollQuestion.trim(),
      options: this.newOptions
        .filter(opt => opt.trim() !== '')
        .map(opt => ({
          optionText: opt.trim(),
          voteCount: 0
        }))
    };

    if (poll.options.length < 2) return;

    this.pollService.createPoll(poll as any).subscribe({
      next: () => {
        this.newPollQuestion = '';
        this.newOptions = ['', ''];
        this.loadPolls();
      },
      error: (err) => console.error(err)
    });
  }

  vote(pollId: number, index: number): void {
    this.pollService.vote(pollId, index).subscribe({
      next: () => this.loadPolls(),
      error: (err) => console.error(err)
    });
  }

  trackByIndex(index: number): number {
    return index;
  }

  trackById(index: number, item: Poll): number {
    return item.id ?? index;
  }
}
