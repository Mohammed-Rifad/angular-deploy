import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  id:any
  next_id:any
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'))


    console.log('id is',this.id)
  }

  goNext(){
   this.next_id=this.id+1
    this.router.navigate(['emp',this.next_id])
  }

}
