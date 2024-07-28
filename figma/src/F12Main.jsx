const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/DeleteRecipe'>/DeleteRecipe</a></td>
            <td style={tableCellStyle}><a href='/DeleteRecipe'>Delete Recipe</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Dressing'>/Dressing</a></td>
            <td style={tableCellStyle}><a href='/Dressing'>Dressing</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Edit'>/Edit</a></td>
            <td style={tableCellStyle}><a href='/Edit'>edit</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Fruit'>/Fruit</a></td>
            <td style={tableCellStyle}><a href='/Fruit'>fruit</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LargerLabel'>/LargerLabel</a></td>
            <td style={tableCellStyle}><a href='/LargerLabel'>Larger Label</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LargerLabel1'>/LargerLabel1</a></td>
            <td style={tableCellStyle}><a href='/LargerLabel1'>Larger Label</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Protein'>/Protein</a></td>
            <td style={tableCellStyle}><a href='/Protein'>protein</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Recipe'>/Recipe</a></td>
            <td style={tableCellStyle}><a href='/Recipe'>Recipe</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/RecipeName'>/RecipeName</a></td>
            <td style={tableCellStyle}><a href='/RecipeName'>Recipe Name</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/SaladMaker'>/SaladMaker</a></td>
            <td style={tableCellStyle}><a href='/SaladMaker'>Salad maker</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/SelectIngredients'>/SelectIngredients</a></td>
            <td style={tableCellStyle}><a href='/SelectIngredients'>Select ingredients</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/SelectIngredients1'>/SelectIngredients1</a></td>
            <td style={tableCellStyle}><a href='/SelectIngredients1'>Select ingredients</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Toppings'>/Toppings</a></td>
            <td style={tableCellStyle}><a href='/Toppings'>Toppings</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Vegetables'>/Vegetables</a></td>
            <td style={tableCellStyle}><a href='/Vegetables'>vegetables</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}