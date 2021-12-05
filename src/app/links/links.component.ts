import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: [ './links.component.css' ],
})
export class linksComponent  {
  closeResult: string | undefined;
  
  constructor(private modalService: NgbModal) {}}