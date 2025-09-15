import { Component } from '@angular/core';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@app/shared/components/ui/table/table';
import { TableAction } from '../table-action/table-action';

@Component({
  selector: 'app-project-table',
  imports: [
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableAction,
  ],
  template: `<section class="">
    <ui-table>
      <thead ui-table-header>
        <tr ui-table-row>
          <th ui-table-head class="">Name</th>
          <th ui-table-head>Region</th>
          <th ui-table-head>Created at</th>
          <th ui-table-head class="">Storage Gb</th>
        </tr>
      </thead>

      <tbody ui-table-body>
        @for(project of projects; track $index) {
        <tr ui-table-row>
          <td ui-table-cell class="font-normal">{{ project.projectName }}</td>
          <td ui-table-cell class="font-normal">{{ project.region }}</td>
          <td ui-table-cell class="font-normal">{{ project.createdAt }}</td>
          <td ui-table-cell class="font-normal">{{ project.storageGb }}</td>
          <td ui-table-cell class="text-right font-medium"><app-table-action /></td>
        </tr>
        }
      </tbody>
    </ui-table>
  </section> `,
  styleUrl: './project-table.css',
})
export class ProjectTable {
  projects = [
    {
      projectName: 'SimpleDB_Prod',
      region: 'us-east-1',
      createdAt: '2024-05-10',
      storageGb: 500,
    },
    {
      projectName: 'Analytics_Dev',
      region: 'eu-west-2',
      createdAt: '2024-04-25',
      storageGb: 150,
    },
    {
      projectName: 'UserAuth_Staging',
      region: 'us-west-2',
      createdAt: '2024-05-01',
      storageGb: 25,
    },
    {
      projectName: 'Reporting_Archive',
      region: 'ap-south-1',
      createdAt: '2023-11-15',
      storageGb: 2000,
    },
    {
      projectName: 'MobileApp_Test',
      region: 'ap-southeast-2',
      createdAt: '2024-03-01',
      storageGb: 10,
    },
    {
      projectName: 'Inventory_EU',
      region: 'eu-central-1',
      createdAt: '2024-02-20',
      storageGb: 750,
    },
  ];
}
