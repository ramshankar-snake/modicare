<template>
    <SideMenu></SideMenu>

    <main class="main-container bg-light-blue">
        <section class="my-info py-md-7 py-5">
            <div class="modi-container modi-container__sm">
                <h1 class="text-center mb-5">My Info</h1>
    
                <div class="edit-mode">
                    <div class="title-indent font-semibold mb-3">
                        Address
                        <a href="javascript:;" class="title-inline-link ml-3 toggle-edit-mode edit-mode-disabled">
                            Edit
                            <i class="material-icons">create</i>
                        </a>
                        <a href="javascript:;" class="title-inline-link ml-3 toggle-edit-mode edit-mode-enabled">
                            Save
                            <i class="material-icons">save</i>
                        </a>
                        <a href="javascript:;" class="title-inline-link ml-3 text-danger toggle-edit-mode edit-mode-enabled">
                            Cancel
                            <i class="material-icons">cancel</i>
                        </a>
                    </div>
    
                    <div class="modi-2-col-table mb-3">
                        <div class="row">
                            <div class="col-md-5">Name</div>
                            <div class="col-md-7">
                                <div class="edit-mode-disabled">Ranveer Singh</div>
                                <div class="edit-mode-enabled">
                                    <input type="text" id="form-name" name="form-name" class="form-control form-control-sm" value="Ranveer Singh" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5">Profile type</div>
                            <div class="col-md-7">
                                <div class="edit-mode-disabled">Preferred Customer</div>
                                <div class="edit-mode-enabled">
                                    <input type="text" id="form-profile-type" name="form-profile-type" class="form-control form-control-sm" value="Preferred Customer" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5">Date of birth</div>
                            <div class="col-md-7">
                                <div class="edit-mode-disabled">24.11.1991</div>
                                <div class="edit-mode-enabled">
                                    <input type="text" id="form-date-of-birth" name="form-date-of-birth" class="form-control form-control-sm" value="24.11.1991" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5">House or flat number</div>
                            <div class="col-md-7">
                                <div class="edit-mode-disabled">504</div>
                                <div class="edit-mode-enabled">
                                    <input type="text" id="form-house-or-flat-number" name="form-house-or-flat-number" class="form-control form-control-sm" value="504" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5">Address</div>
                            <div class="col-md-7">
                                <div class="edit-mode-disabled">Paarth Apartments<br>GH 66, Sector 55<br>Gurgaon</div>
                                <div class="edit-mode-enabled">
                                    <textarea type="text" id="form-address" name="form-address" class="form-control form-control-sm" rows="3">Paarth Apartments
    GH 66, Sector 55
    Gurgaon</textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5">Pin Code</div>
                            <div class="col-md-7">
                                <div class="edit-mode-disabled">122011</div>
                                <div class="edit-mode-enabled">
                                    <input type="text" id="form-pin-code" name="form-pin-code" class="form-control form-control-sm" value="122011" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5">State</div>
                            <div class="col-md-7">
                                <div class="edit-mode-disabled">Haryana</div>
                                <div class="edit-mode-enabled">
                                    <input type="text" id="form-state" name="form-state" class="form-control form-control-sm" value="Haryana" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5">Landmark</div>
                            <div class="col-md-7">
                                <div class="edit-mode-disabled">Near sector 55-56 metro station</div>
                                <div class="edit-mode-enabled">
                                    <input type="text" id="form-landmark" name="form-landmark" class="form-control form-control-sm" value="Near sector 55-56 metro station" />
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="py-1 mb-5 text-right">
                        <a href="javascript:;" class="">
                            <i class="material-icons mr-1">file_download</i>
                            View Delivery Addresses
                        </a>
                    </div>
                </div>
    
                <div class="edit-mode">
                    <div class="title-indent font-semibold mb-3">
                        Contact Info
                        <a href="javascript:;" class="title-inline-link ml-3 toggle-edit-mode edit-mode-disabled">
                            Edit
                            <i class="material-icons">create</i>
                        </a>
                        <a href="javascript:;" class="title-inline-link ml-3 toggle-edit-mode edit-mode-enabled">
                            Save
                            <i class="material-icons">save</i>
                        </a>
                        <a href="javascript:;" class="title-inline-link ml-3 text-danger toggle-edit-mode edit-mode-enabled">
                            Cancel
                            <i class="material-icons">cancel</i>
                        </a>
                    </div>
    
                    <div class="modi-2-col-table mb-6">
                        <div class="row">
                            <div class="col-md-5">Mobile number</div>
                            <div class="col-md-7">
                                <div class="edit-mode-disabled">+91 9999866223</div>
                                <div class="edit-mode-enabled">
                                    <input type="text" id="form-mobile-number" name="form-mobile-number" class="form-control form-control-sm" value="+91 9999866223" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5">Alternate phone</div>
                            <div class="col-md-7">
                                <div class="edit-mode-disabled">+91 8820203252</div>
                                <div class="edit-mode-enabled">
                                    <input type="text" id="form-alt-phone" name="form-alt-phone" class="form-control form-control-sm" value="+91 8820203252" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5">Email</div>
                            <div class="col-md-7">
                                <div class="edit-mode-disabled">arya.mehta@gmail.com</div>
                                <div class="edit-mode-enabled">
                                    <input type="email" id="form-email" name="form-email" class="form-control form-control-sm" value="arya.mehta@gmail.com" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import SideMenu from '../components/SideMenu.vue';
export default {
    name: 'StopShop',
    components: {
SideMenu
    },
}
</script>