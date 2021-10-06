import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  message = 'Hello Worldl';
  servers: { id: number; name: string; status: string }[] = [];
  constructor(
    private serverService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serverService.getServers();
  }
  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }
}
