// src/app/pokemon/[id]/page.js

// Hàm này nhận vào props 'params' chứa id từ URL
export default async function PokemonDetail({ params }) {
  // 1. Lấy ID từ URL (Ví dụ: user gõ /pokemon/1 thì id = 1)
  const { id } = await params;

  // 2. Gọi API lấy chi tiết của con Pokemon đó
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const poke = await response.json();

  // 3. Lấy hình ảnh (Artwork đẹp hơn hình sprite cũ)
  const image = poke.sprites.other?.['official-artwork']?.front_default || poke.sprites.front_default;

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      
      {/* Nút quay lại */}
      <a href="/" style={{ textDecoration: 'none', color: 'blue', marginBottom: '20px', display: 'block' }}>
        ← Quay lại danh sách
      </a>

      <div style={{ 
        border: '2px solid #ddd', 
        borderRadius: '20px', 
        padding: '30px', 
        maxWidth: '400px', 
        margin: '0 auto',
        backgroundColor: '#fff',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ textTransform: 'capitalize', fontSize: '3rem', margin: '10px 0' }}>
          {poke.name}
        </h1>
        
        <img src={image} alt={poke.name} style={{ width: '200px', height: '200px' }} />

        {/* Hiển thị thông tin chi tiết */}
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <p><strong>Cân nặng:</strong> {poke.weight / 10} kg</p>
          <p><strong>Chiều cao:</strong> {poke.height / 10} m</p>
          <p><strong>Loại (Type):</strong> {poke.types.map(t => t.type.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
}