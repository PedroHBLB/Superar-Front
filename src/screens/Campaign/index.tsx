import React, { useState, useEffect } from "react";
import { AboutHeader } from "../../components/AboutHeader";
import { Background } from "../../components/Background";
import { ScrollView } from "../../components/ScrollView";
import { api } from '../../services/api';
import axios from 'axios';

import {
  Container,
  ScrollContainer,
  Category,
  Categories,
  Title,
  Text,
  Label,
  Button,
  View
} from "./styles";

export function Campaign() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "http://192.168.11.105:3000/about/"
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((err) => console.log(err)) 
    .finally(() =>setLoading(false))
  }, []);

    return (
      <Background>
        <Container>
          <AboutHeader title="Sobre" />
          <ScrollView>
            <ScrollContainer>
              {
                loading ? (<Text>Loading...</Text>) : (
                  data.map((post: any) => (
                    <View key={post.id}>
                      <Text>{post.sobre}</Text>
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
