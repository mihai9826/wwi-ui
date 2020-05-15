import { Component, OnInit } from '@angular/core';
import {AdminService} from '../service/admin.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminProductDTO} from '../../../shared/models/product/admin-product-dto';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  currentProduct: AdminProductDTO;
  editProductForm = new FormGroup({
    productId: new FormControl(),
    productName: new FormControl(),
    unitPrice: new FormControl(),
    weightPerUnit: new FormControl(),
    stockQuantity: new FormControl()
  });
  constructor(private adminService: AdminService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.adminService.getProductById(productId).subscribe(data => {
      this.currentProduct = data;
      this.editProductForm = this.formBuilder.group({
        productId: this.formBuilder.control(this.currentProduct.stockItemId),
        productName: this.formBuilder.control(this.currentProduct.stockItemName, Validators.required),
        unitPrice: this.formBuilder.control(this.currentProduct.unitPrice, Validators.required),
        weightPerUnit: this.formBuilder.control(this.currentProduct.typicalWeightPerUnit, Validators.required),
        stockQuantity: this.formBuilder.control(this.currentProduct.quantityOnHand, Validators.required)
      });
    });
  }

  onSubmit() {
    const formControls = this.editProductForm.getRawValue();
    const updatedProduct = new AdminProductDTO({
      stockItemId: formControls.productId,
      stockItemName: formControls.productName,
      unitPrice: formControls.unitPrice,
      typicalWeightPerUnit: formControls.weightPerUnit,
      quantityOnHand: formControls.stockQuantity
    });
    this.adminService.updateProduct(this.activatedRoute.snapshot.paramMap.get('id'), updatedProduct).subscribe(
      () => this.router.navigate(['home']).then(_ => this.toastr.success('Product edited', 'Success'))
    );
  }
}
