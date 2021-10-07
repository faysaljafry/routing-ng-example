import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server!: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  id: number = 4;
  constructor(
    private serverService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.id);

    console.log(this.activatedRoute.fragment);
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.activatedRoute.fragment.subscribe();

    // this.server = this.serverService.getServer(1)!;
    this.server = this.serverService.getServer(this.id)!;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
  onUpdateServer() {
    this.serverService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
