import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserEditorDComponent } from 'src/app/components/userEditorDialog/user-editor/user-editor.component';
import { User } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
//OnInit & AfterViewInit pertenecen a @angular/core  
export class UsersComponent implements OnInit {
[x: string]: any;

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
  rowSelected: User | undefined;
  newUser = false;
  //Esto es para poder desuscribirse a la peticio, ya que haremos una nueva
  DataUsers!: Subscription;


  constructor(
    //Importamos nuestro servicio
    private user:AccountService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void{
    this.loadData();
  }

  //Estos cambios son para la limpieza el codigo
  loadData(){
    //Carga la informacion de la tabla de users
    this.DataUsers =
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
    this.rowSelected = row;
  }

  openModalNew(){
    this.newUser = true;
  }

  onCloseHandled(dataModal: any){
    this.rowSelected = undefined;
    this.newUser = false

    if (dataModal.refreshData){
      this.DataUsers.unsubscribe();
      this.loadData();
    }
  }

  openDialog(row: User){
    const dialogRef = this.dialog.open(UserEditorDComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed', result);
    });
  }
}
