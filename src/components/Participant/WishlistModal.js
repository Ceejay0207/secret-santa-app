import React from "react";

const WishlistModal = () => {
    return(
<div className="modal fade" id="wishlistmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Wishlist</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
    <div class="mb-3">
        <label for="productname" className="form-label">Product Name</label>
        <input type="text" className="form-control" id="productname"/>
    </div>
    <div class="mb-3">
        <label for="productlink" className="form-label">Product Link</label>
        <input type="text" className="form-control" id="productlink"/>
    </div>
    <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" id="price"/>
    </div>
    <div class="mb-3">
        <label for="formFile" className="form-label">Image</label>
        <input type="file" class="form-control" id="formFile"/>
    </div>
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Submit</button>
    </div>
    </div>
  </div>
</div>
    )
}
export default WishlistModal