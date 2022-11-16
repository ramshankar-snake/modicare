$(document).ready(function() {
    var filters = {
        "text": "",
        "categoryTypeID": 0,
        "categoryID": 0,
        "sorting": "",
        "page": 1,
    };
    var productListingCategories = [
        {
            "type": "Category",
            "categories": [
                {
                    "name": "All",
                    "id": 0,
                    "active": true
                },
                {
                    "name": "Lips",
                    "id": 1,
                    "active": false
                },
                {
                    "name": "Nails",
                    "id": 2,
                    "active": false
                },
                {
                    "name": "Face",
                    "id": 3,
                    "active": false
                },
                {
                    "name": "Eyes",
                    "id": 1,
                    "active": false
                },
                {
                    "name": "Skin",
                    "id": 2,
                    "active": false
                },
                {
                    "name": "Accessories",
                    "id": 3,
                    "active": false
                },
            ]
        },
        {
            "type": "Brand",
            "categories": [
                {
                    "name": "All",
                    "id": 0,
                    "active": true
                },
                {
                    "name": "Urban Color",
                    "id": 0,
                    "active": false
                },
                {
                    "name": "Pro White",
                    "id": 0,
                    "active": false
                },
            ]
        }
    ]

    var productListingItems = [
        {
            // Category - All
            "title": "All",
            "groups": [
                {
                    "title": "Lips",
                    "items": [
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-1.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-2.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-3.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-4.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-5.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-6.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                    ]
                },
                {
                    "title": "Nails",
                    "items": [
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-nails-1.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-nails-2.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-nails-3.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-nails-4.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-nails-5.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                    ]
                },
                {
                    "title": "Face",
                    "items": [
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-1.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-2.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-3.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-4.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-5.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-6.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-7.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-8.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-9.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                    ]
                },
            ]
        },
        {
            // Category - Face
            "title": "Lips",
            "groups": [
                {
                    "title": "Lips",
                    "items": [
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-1.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-2.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-3.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-4.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-5.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-lips-6.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                    ]
                },
            ]
        },
        {
            // Category - Face
            "title": "Nails",
            "groups": [
                {
                    "title": "Nails",
                    "items": [
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-nails-1.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-nails-2.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-nails-3.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-nails-4.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-nails-5.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                    ]
                },
            ]
        },
        {
            // Category - Face
            "title": "Face",
            "groups": [
                {
                    "title": "Face",
                    "items": [
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-1.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-2.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-3.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-4.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-5.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-6.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-7.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-8.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-9.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                    ]
                },
            ]
        },
        {
            // Brand - All
            "title": "All",
            "groups": [
                {
                    "title": "Urban Color",
                    "items": [
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-1.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-2.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-3.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-4.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-5.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-6.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-7.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-8.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                        {
                            "url": "./product-details.html",
                            "imagePath": "./assets/images/products/products-face-9.png",
                            "description":" Urban Color - Instant Radiance Illuminating Lotion",
                            "additional": "30ml"
                        },
                    ]
                }
            ]
        }
    ];

    var listingLoading = false;
    var listingGroups = $('.listing-groups');
    var categoriesList = $('.modi-filters-categories');
    var listingLoader = $('.listing-loader');

    $(document).on('click', '.modi-filters-type-link', function(e) {
        var selectedFilterTypeLink = $(this);
        var categoryTypeID = selectedFilterTypeLink.data('id');

        if (!selectedFilterTypeLink.hasClass('active') && typeof productListingCategories[categoryTypeID] !== "undefined" && !listingLoading) {
            var categoryTypesContainer = selectedFilterTypeLink.closest('.modi-filters-types');
            var categoryTypeLinks = categoryTypesContainer.find('.modi-filters-type-link');
            categoryTypeLinks.removeClass('active');
            selectedFilterTypeLink.addClass('active');
            filters.categoryTypeID = categoryTypeID;

            categoriesList.slideUp(250);
            listingGroups.fadeOut(250, function() {
                listingLoader.fadeIn(250, function() {
                    updateFilterType(function() {
                        categoriesList.slideDown(250);
                        filters.categoryID = categoriesList.find('.modi-filters-category-link').first().data('id');
                        updateProductListing(function() {
                            listingLoader.fadeOut(250, function() {
                                listingGroups.fadeIn(250);
                            });
                        });
                    });
                });
            });
        }
    });

    function updateFilterType(callback) {
        var html = "";
        var template = $('#filters-category-template').html();
        var templateScript = Handlebars.compile(template);

        // ajax call to API endpoint to retrieve categories, then render in page
        setTimeout(function() {
            $.each(productListingCategories[filters.categoryTypeID].categories, function(key, category) {
                html += templateScript(category);
            });
            categoriesList.html(html);
            callback();
        }, 1000);
    }

    function updateProductListing(callback) {
        var productListingHTML = "";
        var template = $('#listing-group-template').html();
        var templateScript = Handlebars.compile(template);

        // ajax call to API endpoint to retrieve listing items based on current filters, then render in page
        setTimeout(function() {
            productListingHTML = templateScript(productListingItems[filters.categoryID]);
            listingGroups.html(productListingHTML);
            callback();
        }, 1000);
    }

    $(document).on('click', '.modi-filters-category-link', function(e) {
        var selectedFilterCategoryLink = $(this);
        var categoryID = selectedFilterCategoryLink.data('id');

        if (!selectedFilterCategoryLink.hasClass('active') && typeof productListingItems[categoryID] !== "undefined") {
            var filterCategoriesContainer = selectedFilterCategoryLink.closest('.modi-filters-categories');
            var filterCategoryLinks = filterCategoriesContainer.find('.modi-filters-category-link');
            filterCategoryLinks.removeClass('active');
            selectedFilterCategoryLink.addClass('active');
            filters.categoryID = categoryID;

            listingGroups.fadeOut(250, function() {
                listingLoader.fadeIn(250, function() {
                    updateProductListing(function() {
                        listingLoader.fadeOut(250, function() {
                            listingGroups.fadeIn(250);
                        });
                    });
                });
            });
        }
    });
});