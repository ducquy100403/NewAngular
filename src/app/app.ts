import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { flush } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, HeaderLayoutComponent],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    nameBtn = "Click me!";
    clickMessage = "";

    handleClickMe(): void{
      this.clickMessage = "Xin chao";
    }

    updateField(): void{
      console.log("Xin chào")
    }

    bindingMessage = ' ';
}
