import React, { useState, useEffect } from "react";
import { AboutHeader } from "../../components/AboutHeader";
import { Background } from "../../components/Background";
import { ScrollView } from "../../components/ScrollView";

import { Container, ScrollContainer, Text, Label, View } from "./styles";

export function Tips() {
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
        <AboutHeader title="Bônus Financeiro" />
        <ScrollView>
          <ScrollContainer>
            {
              loading ? (<Text>Loading...</Text>) : (
                data.map((post: any) => (
                  <View key={post.id}>
                    <Text>{post.bonus}</Text>
                  </View>
                ))
              )
            }
          </ScrollContainer>
        </ScrollView>
      </Container>
    </Background>
  );
}
