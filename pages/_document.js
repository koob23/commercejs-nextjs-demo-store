// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/swiper@6.6.2/swiper-bundle.min.css" />
          <meta name="title" content="Headless Commerce example with Netlify" key="title" />
          <meta name="description" content="An open source headless commerce example powered by Commerce.js and Netlify. Start your headless commerce application now!" />
          <meta property="og:title" content="Commerce.js | Demo storefront" />
          <meta property="og:image" content="https://cdn.chec.io/email/assets/marketing/demo-preview.png" />
          <meta property="og:description" content="A custom, open source demo storefront built with Next.js and Commerce.js. Take a look!" />
          <meta property="og:url" content="https://commercejs-demo-store.netlify.app" />
          <meta property="twitter:title" content="Commerce.js | Demo storefront" />
          <meta name="twitter:creator" content="@commercejs" />
          <meta property="twitter:image" content="https://cdn.chec.io/email/assets/marketing/demo-preview.png" />
          <meta property="twitter:description" content="A custom, open source demo storefront built with Next.js and Commerce.js. Take a look!" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
              <script type="text/javascript">
var utag_data = {
 
  page_section : "", // Contains a user-friendly page section, e.g. 'configuration section'.
  page_category : "", // Contains a user-friendly page category, e.g. 'appliance page'.
  page_subcategory : "", // Contains a user-friendly page subcategory, e.g. 'refrigerator page'.
  page_type : "", // Contains a user-friendly page type, e.g. 'cart page'.
  customer_id : "", // Contains the customer's ID.
  customer_username : "", // Contains the customer's username, e.g. johndoe38.
  customer_status : "", // Contains the customer's status, e.g. 'logged in'.
  customer_type : "", // Contains the customer's type, e.g. 'bronze member'.
  customer_email : "", // Contains the customer's email.
  customer_city : "", // Contains the city portion of the customer's address.
  customer_state : "", // Contains the state portion of the customer's address.
  customer_zip : "", // Contains the zip code portion of the customer's address.
  customer_country : "", // Contains the country portion of the customer's address.
  search_term : "", // Contains the search term or query submitted by a visitor.
  search_results : "", // Contains the number of results returned with a search query.
  search_type : "", // Contains the type of search conducted by the visitor.
  product_id : "", // Contains product ID(s) - multiple values should be comma-separated.
  product_sku : "", // Contains product SKU(s) - multiple values should be comma-separated.
  product_name : "", // Contains product name(s) - multiple values should be comma-separated.
  product_brand : "", // Contains product brand(s) - multiple values should be comma-separated.
  product_category : "", // Contains product category(s) - multiple values should be comma-separated.
  product_subcategory : "", // Contains product subcategory(s) - multiple values should be comma-separated.
  product_unit_price : "", // Contains product unit price(s) - multiple values should be comma-separated.
  product_list_price : "", // Contains product list price(s) before discount - multiple values should be comma-separated.
  product_quantity : "", // Contains product quantity(s) - multiple values should be comma-separated.
  product_discount : "", // Contains product discount(s) - multiple values should be comma-separated.
  order_id : "", // Contains the order or transaction ID.
  order_total : "", // Contains the order total value.
  order_subtotal : "", // Contains the order subtotal (not containing taxes &amp; shipping).
  order_payment_type : "", // Contains the order payment type.
  order_discount : "", // Contains the order discount (if any).
  order_shipping : "", // Contains the order shipping value.
  order_tax : "", // Contains the order tax amount.
  order_currency : "", // Contains the currency associated with the transaction, e.g. 'USD'.
  order_coupon_code : "", // Contains the order coupon code.
  order_coupon_discount : "", // Contains the order coupon discount.
  order_store : "", // Contains identification information for a store.
  order_type : "", // Contains type of order/cart.
  site_region : "", // Contains values for the region or localized version, e.g. 'en_US'.
  article_id : "", // Contains the article's ID.
  article_name : "", // Contains the article's name.
  article_author : "", // Contains the name of the author of an article.
  article_publish_date : "", // Contains the publish date of an article.
  video_id : "", // Contains the video ID.
  video_name : "", // Contains the name of the video.
  video_duration : "", // Contains the duration of the video. This value should be in seconds.
  video_offset : "", // Contains the time into a video at which a certain state occurs.
  video_state : "", // Contains the state of the video, e.g. start, play, pause, milestone, end.
  video_player : "", // Contains the name of the video player.
  video_player_version : "", // Contains the version of the video player.
  event_type : "", // Contains the event type, e.g. link click', 'button click').
  event_target : "", // Contains the name associated with an interactive element (link, button, etc).
  event_attr1 : "", // Contains custom attribute 1 associated with an event.
  event_attr2 : "", // Contains custom attribute 2 associated with an event.
  event_attr3 : "", // Contains custom attribute 3 associated with an event.
  event_attr4 : "" // Contains custom attribute 4 associated with an event.
}
</script>

<!-- Loading script asynchronously -->
<script type="text/javascript">
    (function(a,b,c,d){
    a='https://tags.tiqcdn.com/utag/blastam-training/abos/prod/utag.js';
    b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
    a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
    })();
</script>

    
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
