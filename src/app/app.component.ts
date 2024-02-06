import { Component, ViewChild } from '@angular/core';
import { Rest } from './services/rest.services';
import { Form, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, Subject, forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dev-app';
  productsId: any;
  productsTitle: any;
  productsDesc: any;
  userList = [{ id: 1, rollno: 100, dept: 'cs', name: 'Harry' }, { id: 2, rollno: 101, dept: 'IT', name: 'peter' }, { id: 12, rollno: 102, dept: 'IT', name: 'John' }];
  toggle = false;
  luck = 0;
  num = [1, 2, 3, 4, 5, 6, 7, 9];
  username = "Abdul kalam";
  uname = '';
  email = "";
  readTerms = "";
  curry = 78997.98;
  perc = 0.8655;
  today = new Date();
  deci = 9747;
  myFrm!: FormGroup;
  custNum = 22;
  isClicked = false;
  isOnline = false;
  status = 'offline';
  mypromise: any;
  count = 0;
  data: number[] = [];
  obser: any;
  firstdata: any;
  seconddata: any;
  thirddata: any;
  asyncpip: any;
  myobs: any;
  myobs1:any;
  mysub: any;
  mysub1:any;
  selectedstudent:any;
  students = [
    {id:1,name:'Doe'},
    {id:2,name:'John'},
    {id:3,name:'Jasmine'},
    {id:4,name:'stella'}
  ]

  constructor(private restServ: Rest) { }
  @ViewChild('myForm', { static: true }) mform: any;
  @ViewChild('input', { static: true }) myInput: any;
  ngOnInit() {
    this.restServ.getSample().subscribe((res: any) => {
      this.productsId = res.id;
      this.productsTitle = res.title;
      this.productsDesc = res.description;
    })

    this.myInput.nativeElement.focus();

    this.myFrm = new FormGroup({
      nameu: new FormControl('Angular', Validators.required),
      emailu: new FormControl(null, [Validators.required, Validators.email]),
      read: new FormControl(true, Validators.required)
    })

    //promise
    this.getstatus();
    this.mypromise.then((ress: any) => {
      console.log(ress);
      this.checkLogic();
    }, (err: any) => {
      console.log(err)
    })

    //Observable
    this.obser = new Observable<number[]>((obs) => {
      setInterval(() => {
        this.data.push(this.count);
        this.count++;
        if (this.count < 5) {
          obs.next(this.data)
        } else {
          //obs.error("DB error time")
          obs.complete()
        }
      }, 1000)
    })

  }
  tog() {
    this.toggle = !this.toggle;
  }
  sendText(input: any, channel: any) {
    console.log(input.value);
    console.log(channel)
  }

  onSubmit(myForm: NgForm) {
    // this.mform.reset();
    console.log(myForm);
  }

  onSubmitted() {
    console.log(this.myFrm);
    // this.myFrm.setValue({
    //   nameu:'Angularr',
    //   emailu:'test@ang.com',
    //   read:true
    // })

    this.myFrm.patchValue({
      'emailu': 'ang@test.com'
    })
  }

  refresh() {
    this.userList = [{ id: 1, rollno: 100, dept: 'cs', name: 'Harry' }, { id: 4, rollno: 101, dept: 'IT', name: 'James' }, { id: 12, rollno: 102, dept: 'IT', name: 'John' }, { id: 5, rollno: 106, dept: 'CSE', name: 'Harris' }]
  }

  trackByUser(index: any, item: any) {
    // return index
    return item.id
  }

  onClick() {
    this.isClicked = !this.isClicked;
  }

  getstatus() {
    console.log('Get status');
    this.mypromise = new Promise((res, rej) => {
      setTimeout(() => {
        console.log('Receive status');
        this.isOnline = false;
        //res(this.isOnline);
        rej("DB error problem");
      }, 3000)
    })
  }

  checkLogic() {
    console.log('check logic');
    if (this.isOnline) {
      this.status = 'online'
    } else {
      this.status = 'offline'
    }
  }
  getDt() {
    this.obser.subscribe((rep: any) => {
      console.log(rep)
    }, (err: any) => {
      console.log(err)
    }, () => {
      console.log('completed')
    })
    // console.log(this.data);
  }

  fork() {
    let obb = new Observable((o1) => {
      setTimeout(() => {
        o1.next(102)
        o1.complete()
      }, 2000)
    })

    let obb1 = new Observable((o2) => {
      setTimeout(() => {
        o2.next(101)
        o2.complete()
      }, 1000)
    })

    let obb2 = new Observable((o3) => {
      setTimeout(() => {
        o3.next(100)
        o3.complete()
      }, 4000)
    })

    return forkJoin([obb, obb1, obb2])

  }

  forrk() {
    this.fork().subscribe((allapi: any) => {
      console.log(allapi)
      this.firstdata = allapi[0];
      this.seconddata = allapi[1];
      this.thirddata = allapi[2];
    })
  }

  getasync() {
    this.asyncpip = this.restServ.getSample();
  }

  getObs() {
    let obsval1 = new Observable<any>((observer) => {
      observer.next(Math.floor(Math.random() * 99 + 2))
    })

    obsval1.subscribe((resp) => {
      this.myobs = resp;
    })

    obsval1.subscribe((resp) => {
      this.myobs1 = resp;
    })
  }

  getSub() {
    let subval = new Subject();
   
    subval.subscribe((resp) => {
      this.mysub = resp;
    })

    subval.subscribe((resp) => {
      this.mysub1 = resp;
    })

    subval.next(Math.floor(Math.random() * 99 + 2));
    
  }

  onselect() {
    console.log(this.selectedstudent)
  }


}
