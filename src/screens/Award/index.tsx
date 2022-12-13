import React, { useState, useEffect } from "react";
import { AboutHeader } from "../../components/AboutHeader";
import { Background } from "../../components/Background";
import { ScrollView } from "../../components/ScrollView";
import { Label } from "../Tips/styles";

import { Container, Text, View } from "./styles";

export function Award() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "http://192.168.11.105:3000/about/"
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, []);

  return (
    <Background>
      <Container>
        <AboutHeader title="Premiação" />
        <ScrollView>
          {
            loading ? (<Text>Loading...</Text>) : (
              data.map((post: any) => (
                <View key={post.id}>
                  <Text>{post.premiacao}</Text>
                </View>
              ))
            )
          }
        </ScrollView>
      </Container>
    </Background>
  );
}
