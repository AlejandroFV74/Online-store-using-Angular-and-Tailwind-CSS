import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(Timevalue: string): string {
    const now = new Date().getTime();
    const time = new Date(Timevalue).getTime();

    const diff = now - time;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return years + ' year' + (years > 1 ? 's' : '') + ' ago';
    }
    if (months > 0) {
      return months + ' month' + (months > 1 ? 's' : '') + ' ago';
    }
    if (days > 0) {
      return days + ' day' + (days > 1 ? 's' : '') + ' ago';
    }
    if (hours > 0) {
      return hours + ' hour' + (hours > 1 ? 's' : '') + ' ago';
    }
    if (minutes > 0) {
      return minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ago';
    }
    return 'just now';
  }
}
