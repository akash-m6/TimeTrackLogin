import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // Change this from 'app-time-logging' to 'app-log-hours' 
  // to match your dashboard-employee.component.html
  selector: 'app-log-hours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loghours.component.html',
  styleUrls: ['./loghours.component.css']
})
export class LogHoursComponent {
  @Input() logs: any[] = [];
  @Input() weeklyHours: number = 0;
  @Output() onAddLog = new EventEmitter<void>();
}