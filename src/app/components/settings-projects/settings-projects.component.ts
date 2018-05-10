import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, defaultFirebase } from 'angularfire2';

declare var jQuery: any;
declare var $:any;

@Component({
  selector: 'app-settings-projects',
  templateUrl: './settings-projects.component.html',
  styleUrls: ['./settings-projects.component.css']
})
export class SettingsProjectsComponent implements OnInit {
  private sub: any;
  public proyecto_id: number;
  public proyecto_data:FirebaseObjectObservable<any>;
  public proyecto_data_status:FirebaseObjectObservable<any>;
  public proyecto_data_tipo:FirebaseObjectObservable<any>;
  public proyecto_data_usuarios:FirebaseObjectObservable<any>;

  constructor(private router: Router, private route: ActivatedRoute, public af: AngularFire) {
  }


  ngOnInit() {
    // esto reconoce el parametro de la ruta: el id del componente padre "ProyectoComponent"
    this.sub = this.route.parent.params.subscribe(params => {
        this.proyecto_id = params["id"];

        // consultar a la bd con key del proyecto desde la url
        this.proyecto_data = this.af.database.object('/projects/'+ this.proyecto_id);
        this.proyecto_data_status = this.af.database.object('/status_project/'+ this.proyecto_id);
        this.proyecto_data_tipo = this.af.database.object('/type_project/'+ this.proyecto_id);
        this.proyecto_data_usuarios = this.af.database.object('/users_project/'+ this.proyecto_id);
    });


  }

}
