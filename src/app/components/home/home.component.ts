import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


declare var jQuery: any;
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css']
})
export class HomeComponent implements OnInit {
  public isLoggedIn: boolean;
  public user_displayName: string;
  public uId: string;
  projects: FirebaseListObservable<any[]>;


  constructor(public authService: AuthService, private router:Router, public af: AngularFire, ) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.router.navigate(['login']);
          this.uId = "";
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.uId = auth.uid; // ID del usuario logueado
        }
      }
    );

    // llamando a la bd los proyectos que hay registrados...
    this.projects = af.database.list('/projects');

  }

crearProyecto(){
  //crear proyecto!

  const projecto = this.af.database.list('/projects');
  let key = projecto.push( {
    name: 'Redvlact',
    file: 'url del archivo',
    image: 'assets/img/default_project.svg',
    description: 'Descripcion del proyecto',
    created_at: 112451125513
  }).key;

  const status_project = this.af.database.object('/status_project/'+key);
  status_project.set( {
    dispatched: false,
    done: true
  });

  const type_project = this.af.database.object('/type_project/'+key);
  type_project.set( {
    type: 1
  });

  const users_project = this.af.database.object('/users_project/'+key);
  let UsuarioLogueado = this.uId;
  users_project.set( {
    [UsuarioLogueado] : true
  });
}


  ngOnInit() {

    $('#crear_proyecto').modal({
       dismissible: false,
       opacity: .5,
       inDuration: 180,
       outDuration: 200,
       startingTop: '0%',
       endingTop: '30%',
       ready: function(modal, trigger) {

         $("#_d_f_close").click(function(){
           $('#crear_proyecto').modal('close');
         });

       },
       complete: function() {
         // Callback al cerrar el modal
        }
     }
   );

  }

}
