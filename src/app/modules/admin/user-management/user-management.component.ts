import { Component, OnInit } from '@angular/core';
import {User} from '../../../shared/models/auth/user';
import {AdminService} from '../service/admin.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: User[];
  itemsPerPage = 18;
  totalElements;
  page = 1;
  previousPage;
  roleToBeUpdated: string;
  constructor(private adminService: AdminService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

  loadData() {
    this.adminService.getRegisteredUsers(this.page - 1, this.itemsPerPage).subscribe(
      response => {
        this.users = response.content;
        this.totalElements = response.totalElements;
        this.itemsPerPage = response.size;
      }
    );
  }

  itemsDropDownChange(event: any) {
    this.itemsPerPage = event.target.value;
    this.loadData();
  }

  onDeletePress(i: number) {
      const userId = this.users[i].personId;
      this.adminService.deleteRegisteredUser(userId).subscribe(_ => {
        this.users = this.users.filter(x => x.personId !== userId);
        this.toastr.success('User deleted', 'Success');
      });
  }

  onDropDownChange(event) {
    this.roleToBeUpdated = event.target.value;
  }

  onEditPress(index: number) {
    const userId = this.users[index].personId;
    this.adminService.updateUserRole(userId, this.roleToBeUpdated).subscribe(_ => {
      this.toastr.success('Updated role', 'Success');
    });
  }
}
