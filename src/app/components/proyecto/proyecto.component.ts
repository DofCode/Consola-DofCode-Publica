import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, defaultFirebase } from 'angularfire2';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit  {
  private sub: any;
  public proyecto_id: number;
  public validar: boolean;
  public proyecto_data:FirebaseObjectObservable<any>;
  public proyecto_data_status:FirebaseObjectObservable<any>;
  public proyecto_data_tipo:FirebaseObjectObservable<any>;
  public proyecto_data_usuarios:FirebaseObjectObservable<any>;
  //public name: string;
  public constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute, public af: AngularFire) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.router.navigate(['login']);
        }
      }
    );

   }

   ngOnInit() {

        this.validar = true;

         // Recogemos los parametros de la URL
          this.route.params.subscribe(params => {
            this.proyecto_id = params['id'];

              // consultar a la bd con key del proyecto desde la url
              this.proyecto_data = this.af.database.object('/projects/'+ this.proyecto_id);
              this.proyecto_data_status = this.af.database.object('/status_project/'+ this.proyecto_id);
              this.proyecto_data_tipo = this.af.database.object('/type_project/'+ this.proyecto_id);
              this.proyecto_data_usuarios = this.af.database.object('/users_project/'+ this.proyecto_id);

              /*  
              this.proyecto_data_status.subscribe(function(datos){
                 console.log(datos.dispatched);
               });
               */

          });
     }


}
