import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-risk-create',
  templateUrl: './risk-create.component.html',
  styleUrls: ['./risk-create.component.scss']
})
export class RiskCreateComponent implements OnInit {

  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

}
