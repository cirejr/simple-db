import { Component } from '@angular/core';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Accordion,
} from '@app/shared/components/ui/accordion/accordion';
import { Header } from '@app/pages/home/components/header/header';
import { GridContainer } from '@app/shared/directives/grid-container';
import { Hero } from '../components/hero/hero';

@Component({
  selector: 'app-home',
  imports: [GridContainer, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
