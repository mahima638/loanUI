
import { Component } from '@angular/core';
import { Loanservice } from '../loanservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-loanaccount',
  styleUrl: './loanaccount.scss',
  templateUrl: './loanaccount.html',
})
export class Loanaccount {

  accounts: any[] = [];
  filteredAccounts: any[] = [];
  selectedStatus = 'All Status';
  searchText = '';

  constructor(private service: Loanservice) {
    this.getLoans();
  }

  getLoans() {
    this.service.getAccounts().subscribe({
      next: (res: any[]) => {
        this.accounts = res;
        this.filterAccounts();
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  filterAccounts() {
  this.filteredAccounts = this.accounts.filter(account => {
    const matchesStatus =
      this.selectedStatus === 'All Status' ||
      account.loanStatus?.toLowerCase() ===
        this.selectedStatus.toLowerCase();

    const matchesSearch =
      account.loanAccountNo?.toLowerCase().includes(
        this.searchText.toLowerCase().trim()
      );

    return matchesStatus && matchesSearch;
  });
}
}
