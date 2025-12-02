import Link from 'next/link'; // <--- 1. NHỚ THÊM DÒNG NÀY

export default async function PokemonPage() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const data = await response.json();
  const pokemonList = data.results;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Pokemon Server Side</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '20px' 
      }}>
        
        {pokemonList.map((poke, index) => {
          const id = index + 1;
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            // 2. Thay div bao ngoài bằng Link
            // href trỏ đến thư mục động chúng ta vừa tạo
            <Link 
              href={`/pokemon/${id}`} 
              key={index} 
              style={{ textDecoration: 'none', color: 'black' }} // Bỏ gạch chân mặc định
            >
              <div style={{ 
                border: '1px solid #ddd', 
                borderRadius: '15px', 
                textAlign: 'center', 
                padding: '10px',
                cursor: 'pointer', // Hiện bàn tay khi di chuột
                transition: 'transform 0.2s' // Hiệu ứng mượt
              }}>
                <img src={imageUrl} alt={poke.name} style={{ width: '100px', height: '100px' }} />
                <h3 style={{ textTransform: 'capitalize' }}>{poke.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}