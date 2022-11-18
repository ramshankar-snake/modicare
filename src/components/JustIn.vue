<template>

    <div class="products-showcase-introduction">
        <h1 class="products-showcase-title">Just in!</h1>

        <div class="products-showcase-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        </div>

        <div class="products-showcase-links mt-4">
            <router-link to="product-listing" class="icon-after icon-chevronright">More</router-link>
        </div>
    </div>

    

    <div id="just-in-products-carousel" class="product-listing-carousel-container modi-container">
               
        <div class="product-listing-carousel swiper-container">
            <div class="swiper-wrapper">
                <swiper
                :slides-per-view="4"
                :space-between="0"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
              >
              <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-lips-1.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-lips-2.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-lips-3.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-lips-4.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-lips-5.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-lips-6.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-nails-1.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-nails-2.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-nails-3.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-nails-4.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-nails-5.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-face-1.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-face-2.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-face-3.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-face-4.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-face-5.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-face-6.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-face-7.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-lips-1.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                    <swiper-slide>
                    <div class=" product-listing-carousel-slide">
                        <div class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" src="@/assets/images/products/products-lips-2.png" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">30ml</div>
                                            <div class="listing-item-price">£ 22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
                                        data-container="body"
                                        data-live-search="true"
                                        data-size="7"
                                        data-style="modi-qty-dropdown-btn"
                                        title="Qty"
                                    >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                            <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="swiper-button-prev">
            <img src="@/assets/images/home/carousel-arrow-left-white-primary-bg.svg" alt="Previous" />
        </div>
        <div class="swiper-button-next">
            <img src="@/assets/images/home/carousel-arrow-right-white-primary-bg.svg" alt="Next" />
        </div>
    </div>
    </template>
    <script>
// export default {
//     name: 'MainBanner',
// }


import {  Pagination, A11y } from 'swiper';
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
 
  
  SwiperCore.use([Navigation]);
  export default {
    name: 'JustIn',
   
    components: {
      Swiper,
      SwiperSlide,
      
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const swiper = useSwiper();
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        swiper,
        modules: [ Pagination, A11y],
        swiperOptions: {
                    loop: true,
                    
                    centeredSlides: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
      };
    },
  };
</script>