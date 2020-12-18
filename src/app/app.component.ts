import {Component, OnInit} from '@angular/core';
import Veriff from '@veriff/js-sdk';

const VRF_PARAMS = {
  apiKey: 'API_KEY',
  parentId: 'veriff-root',
  onSession: (err, response) => {
    console.log(err, response);
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sdk-check';
  private veriff: Veriff;

  ngOnInit(): void {
    this.mountVeriff();
  }

  private mountVeriff(): void {
    this.veriff = Veriff(VRF_PARAMS);
    this.veriff.mount();
  }
}
