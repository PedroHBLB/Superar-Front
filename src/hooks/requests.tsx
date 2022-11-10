import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Toast from "react-native-root-toast";

import { api } from "../services/api";
import { useTheme } from "styled-components";
import { Post } from "../dtos/PhotoDTO";
import { File } from "../dtos/FileDTO";

interface RequestContextData {
  loading: boolean;
  loadingMore: boolean;
  posts: Post[];
  documents: File[];
  handleNewComprovante: (data: any) => void;
  handleNewDocument: (data: any) => void;
  handleNewInovacao: (data: any) => void;
  fetchProfilePosts: () => Promise<void>;
  fetchProfilePostsMore: (distance: number) => Promise<void>;
  fetchProfileDocuments: () => Promise<void>;
}

interface RequestProviderProps {
  children: ReactNode;
}

const RequestContext = createContext<RequestContextData>(
  {} as RequestContextData
);

function RequestProvider({ children }: RequestProviderProps) {
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [documents, setDocuments] = useState<File[]>([]);

  const handleNewComprovante = (data: any) => {
    setPosts((oldState) => [data, ...oldState]);
  };

  const handleNewDocument = async (data: any) => {
    setDocuments((oldState) => [data, ...oldState]);
  };

  const handleNewInovacao = async (data: any) => {
    setDocuments((oldState) => [data, ...oldState]);
  };

  const fetchProfilePosts = async () => {
    try {
      const { data } = await api.get(
        `/pilares/saude/photos?_page=${page}&limit=15`
      );

      if (!data) {
        setLoading(true);
      }

      if (page > 1) {
        setPosts((oldState) => [...oldState, ...data]);
      } else {
        setPosts(data);
      }

      setLoading(false);
      setLoadingMore(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfilePostsMore = async (distance: number) => {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchProfilePosts();
  };

  const fetchProfileDocuments = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/pilares/conhecimento/documents");

      if (!data) {
        return;
      }

      setDocuments(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RequestContext.Provider
      value={{
        loading,
        loadingMore,
        posts,
        documents,
        handleNewComprovante,
        handleNewDocument,
        handleNewInovacao,
        fetchProfilePosts,
        fetchProfilePostsMore,
        fetchProfileDocuments,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}

function useRequest(): RequestContextData {
  const context = useContext(RequestContext);

  return context;
}

export { useRequest, RequestProvider };
