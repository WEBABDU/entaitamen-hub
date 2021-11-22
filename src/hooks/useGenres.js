export const useGenres = (selectedGenres) => {
    if (selectedGenres < 1) return '';
    
    const GenresIds = selectedGenres.map((g) => g.id)
    return GenresIds.reduce((acc,curr) => acc + ',' + curr)
}