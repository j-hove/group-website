import React from "react";

function Contact() {
  return (
    <section class="p-5" id="contact">
      <div class="container">
        <div class="row g-4">
          <div class="col-md">
            <h2 class="text-center mb-4 text-warning">Contact Us</h2>
            <ul class="list-group list-group-flush lead">
              <li class="list-group-item">
                <span class="fw-bold text-info">Address:</span> 123 Main St. 456 Somewhere Down the Road 
              </li>
              <li class="list-group-item">
                <span class="fw-bold text-info">Phone:</span> (049) 302-5462
              </li>
              <li class="list-group-item">
                <span class="fw-bold text-info">Email:</span> contact_us@brogrammers.com
              </li>
            </ul>
          </div>
          <div class="col-md">
            <h2 class="text-center mb-4 text-info">Send your queries to us:</h2>

            <form>
              <input type="text" class="form-control my-4" placeholder="Name" />
              <input type="text" class="form-control my-4" placeholder="Email" />
              <textarea class="form-control my-4" placeholder="Message"></textarea>
            </form>            
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
