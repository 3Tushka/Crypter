import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Collection {
  name: string;
  count: number;
  imageUrl: string;
  symbol: string;
}

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss'],
})
export class CreateCollectionComponent {
  collections: Collection[] = [];

  showCreateCollectionModal = true;
  isFormSubmited: boolean = false;

  imageFile: string | ArrayBuffer | null = null;

  constructor() {}

  collectionForm = new FormGroup({
    name: new FormControl(''),
    symbol: new FormControl(''),
    imageUrl: new FormControl(''),
  });

  ngOnInit(): void {}

  toggleNewCollectionModal() {
    this.showCreateCollectionModal = !this.showCreateCollectionModal;
  }

  onSubmit() {
    if (this.collectionForm.valid) {
      console.log('Form is valid', this.collectionForm.value);
      this.collectionForm.reset();
      this.imageFile = null;
    }

    this.isFormSubmited = true;
  }

  goBackToForm() {
    this.isFormSubmited = false;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.match(/image.*/)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.imageFile = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
