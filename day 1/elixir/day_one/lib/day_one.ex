defmodule DayOne do
  require Logger

@file_path "/Users/i752054/Documents/Repos/advent-of-code-2024/day 1/input"

  defp parse_input(file_path) do
    with {:ok, contents} <- File.read(file_path) do
      input = contents
      |> String.split("\n")
      |> Enum.map(fn line ->
        String.split(line, "   ")

      end)
      |> Enum.reduce(%{:one => [], :two => []}, fn line, accumulator ->
        {input_one, _} = Integer.parse(Enum.at(line, 0))
        {input_two, _} = Integer.parse(Enum.at(line, 1))
        %{
          one: accumulator.one ++ [input_one],
          two: accumulator.two ++ [input_two],
        }

      end)
      {:ok, input}
    end
  end

  defp calculate_distance(input_one, input_two) do
    abs(input_one - input_two)
  end

  defp calculate_distances_sum( [head_one | tail_one], [head_two | tail_two]) do
    calculate_distance(head_one, head_two) + calculate_distances_sum( tail_one, tail_two)
  end

  defp calculate_distances_sum([], []), do: 0

  defp calculate_score(list_one, list_two) do
    Enum.reduce(list_one, 0, fn element, acc ->
      occurrences = find_occurrences(list_two, element) |> length()
      acc + occurrences * element
    end)
  end

  defp find_occurrences(list, element), do: Enum.filter(list, fn x -> x == element end)


  def start(_type, _args) do
    with {:ok, input} <- parse_input(@file_path),
      sorted_input <- %{one: Enum.sort(input.one), two: Enum.sort(input.two)} do
        distance_sum = calculate_distances_sum(sorted_input.one, sorted_input.two) |> IO.inspect(label: "Sum of distances")
        total_score = calculate_score(sorted_input.one, sorted_input.two) |> IO.inspect(label: "Score")
        {:ok, {distance_sum, total_score}}
    end
  end

end
