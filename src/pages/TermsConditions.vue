<template>
    <div class="side-menu-overlay"></div>

<div class="side-menu">
    <div class="side-menu-container">
        <div class="side-menu-inner-container">
            <div class="side-menu-content">
                <div class="side-menu-close">
                    <a href="javascript:;" class="btn-side-menu-close"><img src="@/assets/images/icons/icon-close-dark.svg" alt="Close Side Menu" class="btn-side-menu-close-icon" /></a>
                </div>

                <div class="side-menu-title">All Products</div>
                <div class="side-menu-title-link">
                    <a href="javascript:;" class="icon-after icon-chevronright">View Catalogues</a>
                </div>

                <ul class="side-menu-nav-list">
                    <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Wellness</a></li>
                    <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Skin Care</a></li>
                    <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Color</a></li>
                    <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Home Care</a></li>
                    <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">F&B</a></li>
                    <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Watches</a></li>
                    <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Tech</a></li>
                    <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Jewelry</a></li>
                </ul>

                <div class="side-menu-links">
                    <a href="javascript:;" class="icon-after icon-chevronright side-menu-link">Catalogues</a>
                    <a href="javascript:;" class="icon-after icon-chevronright side-menu-link">Newly launched</a>
                </div>

                <div class="side-menu-buttons">
                    <a href="javascript:;" class="side-menu-button waves-effect">
                        <img src="@/assets/images/icons/icon-locate-consultant.svg" class="side-menu-button-icon" alt="Locate Consultant" />
                        <div class="side-menu-button-text">
                            Locate<br />Consultant
                        </div>
                    </a>
                    <a href="javascript:;" class="side-menu-button waves-effect">
                        <img src="@/assets/images/icons/icon-locate-store.svg" class="side-menu-button-icon" alt="Locate Consultant" />
                        <div class="side-menu-button-text">
                            Locate<br />Store
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mobile-menu">
    <div class="mobile-menu-container">
        <div class="mobile-menu-content">
            <div class="mobile-menu-main">
                <div id="mobile-menu-search-form">
                    <div class="mobile-menu-search-input-container">
                        <input type="text" id="mobile-menu-search-input" class="mobile-menu-search-input" name="mobile-search" placeholder="Search modicare.com" />
                        <img src="@/assets/images/icons/icon-search-dark.svg" class="mobile-menu-search-btn" alt="Search modicare.com" />
                    </div>
                </div>

                <div class="mobile-menu-main-menu">
                    <ul class="mobile-menu-nav-list">
                        <li class="mobile-menu-nav-list-item"><a href="javascript:;" class="toggle-mobile-menu-sub-menu icon-after icon-chevronright" data-target="mobile-menu-products-menu">Shop</a></li>
                        <li class="mobile-menu-nav-list-item"><a href="./index.html">Home</a></li>
                        <li class="mobile-menu-nav-list-item"><a href="javascript:;" class="toggle-mobile-menu-sub-menu icon-after icon-chevronright" data-target="mobile-menu-about-menu">About</a></li>
                        <li class="mobile-menu-nav-list-item"><a href="./careers.html">Offers</a></li>
                        <li class="mobile-menu-nav-list-item"><a href="./business-opportunity.html">Business Opportunity</a></li>
                    </ul>

                    <div class="mobile-menu-social-links">
                        <a href="javascript:;" class="mobile-menu-social-link waves-effect"><img src="@/assets/images/btn-facebook.png" alt="Modicare Facebook" /></a>
                        <a href="javascript:;" class="mobile-menu-social-link waves-effect"><img src="@/assets/images/btn-instagram.png" alt="Modicare Instagram" /></a>
                        <a href="javascript:;" class="mobile-menu-social-link waves-effect"><img src="@/assets/images/btn-linkedin.png" alt="Modicare Linkedin" /></a>
                        <a href="javascript:;" class="mobile-menu-social-link waves-effect"><img src="@/assets/images/btn-youtube.png" alt="Modicare YouTube" /></a>
                    </div>
                </div>

                <div class="mobile-menu-search">
                    <div class="mobile-menu-search-go-to">
                        <div class="mobile-menu-search-go-to-heading">Go to</div>

                        <div class="mobile-menu-search-go-to-item">
                            <a href="./the-visionary.html">The Vision</a>
                        </div>

                        <div class="mobile-menu-search-go-to-item">
                            <a href="./event.html">Events & Programs</a>
                        </div>

                        <div class="mobile-menu-search-go-to-item">
                            <a href="./event-gallery.html">Event Gallery</a>
                        </div>

                        <div class="mobile-menu-search-go-to-item">
                            <a href="javascript:;">Success Stories</a>
                        </div>

                        <div class="mobile-menu-search-go-to-item">
                            <a href="./business-opportunity.html">Business Opportunity</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mobile-menu-sub-menu-container">
                <div class="mobile-menu-sub-menu" id="mobile-menu-products-menu">
                    <div class="mobile-menu-sub-menu-title-section">
                        <div class="mobile-menu-sub-menu-title-link">
                            <a href="javascript:;" class="toggle-mobile-menu-sub-menu icon-before icon-chevronleft">Back</a>
                        </div>
                    </div>

                    <div class="mobile-menu-sub-menu-content-section">
                        <ul class="mobile-menu-sub-menu-nav-list">
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Wellness</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Skin Care</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Color</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Home Care</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">F&B</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Watches</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Tech</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Jewelry</a></li>
                        </ul>

                        <div class="mobile-menu-sub-menu-links">
                            <a href="javascript:;" class="icon-after icon-chevronright mobile-menu-sub-menu-link">View Catalogues</a>
                        </div>

                        <div class="mobile-menu-sub-menu-locate-links">
                            <a href="javascript:;" class="locate-link waves-effect">
                                <div class="locate-link-icon-container">
                                    <img src="@/assets/images/icons/icon-locate-store.svg" class="locate-link-icon" alt="Locate Consultant" />
                                </div>
                                <div class="locate-link-text">
                                    Locate<br />Store
                                </div>
                            </a>
                            <a href="javascript:;" class="locate-link waves-effect">
                                <div class="locate-link-icon-container">
                                    <img src="@/assets/images/icons/icon-locate-consultant.svg" class="locate-link-icon" alt="Locate Consultant" />
                                </div>
                                <div class="locate-link-text">
                                    Locate<br />Consultant
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mobile-menu-sub-menu" id="mobile-menu-about-menu">
                    <div class="mobile-menu-sub-menu-title-section">
                        <div class="mobile-menu-sub-menu-title-link">
                            <a href="javascript:;" class="toggle-mobile-menu-sub-menu icon-before icon-chevronleft">Back</a>
                        </div>
                    </div>

                    <div class="mobile-menu-sub-menu-content-section">
                        <ul class="mobile-menu-sub-menu-nav-list">
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./our-story.html">Our Story</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./the-visionary.html">The Visionary</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-separator"></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./achievers.html">Success Stories</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./event.html">Events</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./careers.html">Careers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<main class="main-container">
    <section class="tnc">
        <div class="tnc-container modi-container">
            <div class="tnc-section">
                <h1 class="tnc-section-header">Terms & Conditions</h1>
                <a href="javascript:;" class="icon-after icon-chevronright tnc-section-link scroll-to-start" data-class-name="intellectual-property-rights">Go to intellectual property rights</a>

                <p><a href="javasript:;">www.modicare.com</a> (the "Site") is owned and operated by Modicare Ltd. ("we" or "us" or Modicare), a company incorporated
                under the laws of India and having its office at 5, Community Center, New Friends Colony, Pin - 110025,India.</p> 
                <p>Please note that this is a business/commercial site and can be accessed only by a valid account holder. Your access and use of
                the Site is subject to the following terms and conditions ("Website Terms and Conditions") and all applicable laws. By
                accessing and browsing this Site, you accept, without limitation or qualification, the Website Terms and Conditions. If
                you do not agree with any of the below Terms and Conditions, do not use this Site.</p>
                <p>We reserve the right, in our sole
                discretion, to modify, alter or otherwise update these Website Terms and Conditions at any time and you agree to be
                bound by such modifications, alterations or updates.</p>
                
                <h3>Intended Audience</h3>
                Unless otherwise specified, this site is intended
                for two categories of people i.e. 
                <ul>
                    <li>Modicare Consultants (MC)</li>
                    <li>Customers</li>
                </ul>
                <p>Each category in turn is bound by an
                additional agreement i.e. a MC is bound by the "MC agreement"; and a Customer is bound by the "Customer agreement".
                These agreements find mention on the relevant portions of the website that relate to each of these categories. If you
                fall within any of these categories, it is your responsibility to familiarise yourself with the appropriate agreement
                and to comply with its terms.</p>
                <p>This website (operated by us from our office located in New Delhi, India) is intended as a
                service to the above mentioned categories of people located in India. Therefore any person who accesses this website
                from outside India shall do so at his/her own risk and is responsible for compliance with the laws of his/her respective
                jurisdiction.</p>
                
                <h3>No Cosmetics or Healthcare Advice</h3>
                <p>The products, information, services and other content provided on and
                through this site, including without limitation any products, information, services and other content provided on any
                Linked Site, are provided for informational purposes only to facilitate discussions with your beauticians or other
                healthcare professional (collectively, "Cosmetics Professional") regarding use options.</p>
                <p>The information provided on this
                site and Linked Sites, including without limitation information relating to products and treatments is often provided in
                summary or aggregate form. It is not intended as a substitute for advice from your Cosmetic Professional, or any
                information contained on or in any product label or packaging. No healthcare advice, recommendation, or opinion is
                offered on this web site.</p>
                
                <h3>Customer Satisfaction Program</h3>
                <p>We observe an irreversible 100% Satisfaction Guarantee on our
                products, wherever specified. This assures that consumers of Modicare products will be satisfied with their purchases.</p>
                <p>According to this,</p> 
                <ol>
                    <li>i. If a Customer is not completely satisfied, he/she may return the product to the Modicare
                Consultant for a 100% refund for the product within 7 days of original purchase. </li>
                    <li>ii. A Modicare Consultant can return
                such products back to the company within 30 days of its purchase. The Product Refund Policy is applicable on saleable
                products as well as partially used products, wherein not more than 25% of the product has been used.</li>
                </ol> 
                <p>Modicare Consultant
                shall advise Modicare of any customer complaint and provide copies of all correspondence and details of all
                conversations regarding the complaint. Modicare Consultants are not authorized to make any type of offer or compromise
                or render Modicare liable for any complaint or product return.</p>
                <p>Whenever there is a request from a customer for honoring
                the Company Satisfaction Guarantee, the Modicare Consultant shall offer to the customer the choice of:</p> 
                <ul>
                    <li>Full refund of
                the purchase price paid</li>
                    <li>Exchange with the same or another product of equivalent value.</li>
                </ul>
                <p>Modicare Consultants are
                required to indemnify Modicare for any claim, legal actions, suit, etc. (including Modicare legal fees) which are filed
                or which originate because of any failure by the Modicare Consultant to observe this rule.</p>
                <p>Product Return Procedure: The
                Company will accept return of products along with relevant Customer Order Receipt, Product Return Form and related
                invoice within 30 days of its purchase. In case Modicare Consultant returns product under 100% Satisfaction Guarantee,
                he/she will have the option to take Credit note (through which the Consultant can buy same or another product of the
                same value) or Cash. If amount of refund in lieu of product returned is upto Rs. 1000, cash will be issued immediately
                by MSC. However, if amount exceeds Rs. 1000, Consultant will be issued amount in his registered bank account.</p>
                <p>Product
                Return - Other guidelines/notes: This policy will apply on offer invoices as well as free product received under offer
                as follows – Modicare Consultant returning products purchased under offer may take replacement of invoiced products or
                offer products with same or any other product/s of same value provided offer conditions are not affected otherwise
                Consultant will seize to get the benefit under the offer.</p>
            </div>

            <div class="tnc-return-types">
                <div class="tnc-return-type-card">
                    <div class="tnc-return-type-card-title">Sealable Products</div>
                    <div class="tnc-return-type-card-desc-title">Within 30 days of purchase with invoice</div>
                    <div class="tnc-return-type-card-desc-text">Consultant price</div>
                    <div class="tnc-return-type-card-desc-title">Within 30 days of purchase without invoice</div>
                    <div class="tnc-return-type-card-desc-text">Consultant price less taxes</div>
                </div>
                <div class="tnc-return-type-card">
                    <div class="tnc-return-type-card-title">Unsealable Products</div>
                    <div class="tnc-return-type-card-desc-title">Within 30 days of purchase with invoice</div>
                    <div class="tnc-return-type-card-desc-text">Consultant price less taxes</div>
                    <div class="tnc-return-type-card-desc-title">Within 30 days of purchase without invoice</div>
                    <div class="tnc-return-type-card-desc-text">Consultant price less taxes</div>
                </div>
                <div class="tnc-return-type-card">
                    <div class="tnc-return-type-card-title">Excessive Stock</div>
                    <div class="tnc-return-type-card-desc-title">Within 60 days of purchase with invoice</div>
                    <div class="tnc-return-type-card-desc-text">Consultant price less 10% handling charges </div>
                    <div class="tnc-return-type-card-desc-title">Within 30 days of purchase without invoice</div>
                    <div class="tnc-return-type-card-desc-text">Consultant price less taxes & 10% handling charges</div>
                </div>
                <div class="tnc-return-type-card">
                    <div class="tnc-return-type-card-title">Questions?</div>
                    <div class="tnc-return-type-card-desc-title">Please feel free to <a href="javascript:;">contact us</a> any time!</div>
                </div>
            </div>

            <div class="tnc-section">
                <h3>Product Return Conditions</h3>
                <ol>
                    <li>The consultant must return the product(s) to Modicare Success Centers. </li>
                    <li>Period of return
                for products is calculated as the number of days from the Invoice Date, to the date of receipt at the Modicare Success
                Centre. </li>
                    <li>Condition refers to the condition in which the stock is received back from the Modicare consultant as a
                return. The product can be 'marketable' or 'unmarketable' depending on the condition of the returned stock as assessed
                by the Returns executive at the Modicare Success Centre. </li>
                    <li>PV/BV adjustment of Products returned up till 25th of each
                month shall be processed in the same month. Total PV/BV of the returned products will be deducted from the returning
                Consultant's account. </li>
                    <li>If unsold products return is greater than or equal than 6 in number on a single invoice, 10%
                handling charges will be deducted. </li>
                    <li>The Product Satisfaction Gaurantee does not apply to open packs of literature and
                videos or other sales aids. </li>
                    <li>Total returns cannot exceed the quantity appearing on the invoice. </li>
                    <li>If products are
                returned by customers directly to Modicare, PV/BV adjustment shall be done from the Consultant's account & any excess
                amount paid shall be recoverable from the Consultant. </li>
                    <li>Taxes means all States, Central, VAT, GST Taxes levied in
                India. </li>
                    <li>Saleable refers to products that are unopened and sealed. </li>
                    <li>Unsaleable are products which have been
                partially used (30%). </li>
                    <li>Excess stock refers to products greater than or equal to six in number. </li>
                </ol>
                <p>Consultant Uniform
                Policy: Not included in the Monthly Loyalty Program. No refund will be done on Uniform. Size exchange for Uniform will
                be done only from MSCs within 30 days from the date of invoice. In case of exchange the uniform should be unused,
                unwashed, undamaged and in saleable condition with original tags, buttons & packaging.</p>
                <h3>Amoli Warranty</h3>
                <ul>
                    <li>This warranty
                does not cover any damage caused by accident, misuse, ordinary wear and tear (includes scratches on steel/gold
                polish/plating etc.) </li>
                    <li>We offer Full Money Back Guarantee within 30 days from the date of invoice. For Full Money Back
                Guarantee, the jewellery should be unused, undamaged and in saleable condition with original tags & packaging. </li>
                    <li>Repair
                incase of manufacturing defects will be done only within 90 days from the date of invoice. </li>
                    <li>The defective jewellery has
                to be presented physically along with the original invoice at the time of repair, within 90 days at concerned MSC. </li>
                    <li>Repairs will take 40 days from the date of submission of the defective jewellery subject to the availability of stocks
                and other essentials required in carrying out the job. </li>
                    <li>The packing (jewellery box) will not be the part of the repair
                policy. </li>
                    <li>This policy comes into effect from 12th January, 2019.</li>
                </ul>
            </div>

            <div class="tnc-section intellectual-property-rights pt-5">
                <h1 class="tnc-section-header">Intellectual Property Rights</h1>
                <h3>Copyrights</h3> 
                <p>All material on this Site ("Material"), including but not limited to text, images, illustrations, etc are
                protected by copyrights which are owned and controlled by us or by other parties that have licensed their material to
                us. Material from the site may not be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in
                any way. </p>
                <p>We grant you a limited license to access and make personal use of this site and not to download (other than
                page caching) or modify it, or any portion of it, except with the written consent of Modicare. This license does not
                include any resale or commercial use of this site or its contents; any collection and use of any product listings,
                descriptions, or prices; any derivative use of this site or its contents; any downloading or copying of account
                information for the benefit of another merchant; or any use of data mining, robots, or similar data gathering and
                extraction tools. </p>
                <p>You may not frame or utilise framing techniques to enclose any trademark, logo, or other proprietary
                information (including images, text, page layout, or form) of Modicare without express written consent. You may not use
                any meta tags or any other "hidden text" utilising Modicare name or trademarks without the express written consent of
                Modicare.Any unauthorised use terminates the permission or license granted by Modicare.</p>
                <p>You are granted a limited,
                revocable and nonexclusive right to create a hyperlink to the home page of Modicare so long as the link does not portray
                Modicare, its affiliates, or their products or services in a false, misleading, derogatory, or otherwise offensive
                matter. You may not use any Modicare logo or other proprietary graphic or trademark as part of the link without express
                written permission. </p>
                <h3>Trademarks</h3> 
                <p>The trademarks, logos and service marks ("Marks") displayed on the Site are our property
                and the property of other parties. Users are prohibited from using any Marks without our written permission or third
                parties, which may own the Marks. We also own "trade-dress" rights to the look and feel of our website, which cannot be
                replicated, without our permission.</p>
                <h3>Submissions of information or ideas</h3>
                <p>Any information or material submitted by you to
                the Modicare website (whether through e-mail or otherwise) will be deemed non-proprietary and non-confidential, and may
                be used by Modicare without restriction. Notwithstanding the foregoing, all personal data (e.g., name, address and
                telephone number) provided to Modicare will be handled in accordance with Modicare Privacy Policy.</p>
                <p>Modicare is always
                improving its products and services and developing new features. If you have ideas regarding improvements or additions
                to the Modicare, we would like to hear them. However, please note that under no circumstances shall any disclosure of
                any idea, related materials to Modicare be subject to any obligation of confidentiality or expectation of compensation.</p>
                <p>By submitting the idea and/or any related material to Modicare, you are waiving any/all rights that you may have in the
                idea or any related materials and are representing and warranting to Modicare that the idea and/or related materials are
                wholly original with you and that no one else has any rights in the idea and/or materials and that Modicare is free to
                implement that idea and to use the materials if it so desires as provided or as modified by Modicare, without obtaining
                permission or license from any third party.</p>
                <h3>Linked Sites</h3>
                <p>We may provide links and pointers to Internet sites maintained
                by others ("Third Party Sites"). We are not responsible for the contents of or any products or services offered in such
                Third Party Sites.</p>
            </div>

        </div>
    </section>
</main>
</template>
<script>

export default {
    name: 'TermsConditions',
}
</script>