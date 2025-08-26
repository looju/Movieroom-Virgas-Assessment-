import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovies,
  fetchSearchMovies,
} from "@/src/Api/Service";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../Api/Service";

export const useMovies = (category: string) =>
  useQuery({
    queryKey: ["movies", category],
    queryFn: () => fetchMovies(category),
    enabled: true,
    refetchInterval: 6000,
    staleTime: 20000,
  });

export const useMovieDetails = (id: string) =>
  useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id),
    enabled: !!id,
    refetchInterval: 60000,
  });

export const useMoviesCasts = (id: string) =>
  useQuery({
    queryKey: ["movieCasts", id],
    queryFn: () => fetchMovieCredits(id),
    enabled: !!id,
    refetchInterval: 60000,
  });

export const useSearch = (query: string) =>
  useQuery({
    queryKey: ["searchMovies", query],
    queryFn: () => fetchSearchMovies(query),
    enabled: !!query,
    refetchInterval: 60000,
  });

  export const usePopularMovies = () =>
  useQuery({
    queryKey: ["popular-movies"],
    queryFn: fetchPopularMovies,
    refetchInterval: 60000,
  });
