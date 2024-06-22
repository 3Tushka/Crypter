import { Component } from '@angular/core';

interface Collection {
  name: string;
  count: number;
  imageUrl: string;
}

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss'],
})
export class CreateCollectionComponent {
  collections: Collection[] = [];

  showCreateCollectionModal = false;
  isFormSubmited: boolean = true;

  constructor() {}

  ngOnInit(): void {
    // Placeholder for fetching collections from a service or API
    this.collections = [
      {
        name: 'Cute Planet',
        count: 4,
        imageUrl: '../../assets/images/spotlight/Frame-10.png',
      },
      {
        name: 'Escape',
        count: 12,
        imageUrl: '../../assets/images/spotlight/Frame-3.png',
      },
    ];
  }

  toggleNewCollectionModal() {
    this.showCreateCollectionModal = !this.showCreateCollectionModal;
  }

  onSubmit() {
    this.isFormSubmited = true;

    // Add your form submission logic here
  }
}
