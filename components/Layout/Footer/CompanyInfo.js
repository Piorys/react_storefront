import React from "react";
import {Container,List,Segment} from "semantic-ui-react";

export default () => {
  return (
    <Container fluid textAlign="center">
      <List horizontal verticalAlign="bottom">
        <List.Item icon="users" content="Storefront" />
        <List.Item
          icon="mail"
          content={
            <a href="mailto:storefront@storefront.io">storefront@storefront.io</a>
          }
        />
        <List.Item
          icon="linkify"
          content={<a href="http://www.storefront.io">storefront.io</a>}
        />
      </List>
      <p> © Storefront 2018 </p>
    </Container>
  );
};
