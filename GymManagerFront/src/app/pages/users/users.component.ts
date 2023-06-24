import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
//OnInit & AfterViewInit pertenecen a @angular/core  
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [
    'email',
    'firstName',
    'lastName',
    'phoneNumber',
    'status',
  ];
  //MatTableDataSource vienen de @angular/material/table
  dataSource!: MatTableDataSource<User>;

  //ViewChild pertenece a @angular/core & MatPaginator pertenece a @angular/material/paginator 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //MatSort pertenece a @angular/material/sort
  @ViewChild(MatSort) sort!: MatSort; 
  //!: nos a no iniclizar un valor, sino que espere hasta que tenga uno
  display : string = 'none';


  constructor(
    //Importamos nuestro servicio
    private user:AccountService
  ) {
  }

  ngOnInit(): void{
    //hacemos una consulta
    this.user.getUsers().subscribe(response => {
      this.dataSource = new MatTableDataSource(response.model)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  //Metodo de filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openModal(row: User){
    console.log(row)
    this.display = "block";
  }
  onCloseHandled(){
    this.display = "none";
  }

}