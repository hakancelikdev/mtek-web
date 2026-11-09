// Proje kategorileri. Yeni kategori eklemek için bu listeye bir satır eklemek yeterlidir.

export const projectCategories = {
  'elektrik-tesisati': 'Elektrik tesisatı uygulamaları',
  aydinlatma: 'Aydınlatma uygulamaları',
  pano: 'Elektrik pano uygulamaları',
  'kamera-guvenlik': 'Kamera ve güvenlik sistemleri',
  'yangin-algilama': 'Yangın algılama sistemleri',
  'network-zayif-akim': 'Network ve zayıf akım uygulamaları',
  'ticari-alan': 'Ticari alan ve mağaza uygulamaları',
  'konut-villa': 'Konut ve villa projeleri',
} as const;

export type ProjectCategory = keyof typeof projectCategories;

export const projectCategoryKeys = Object.keys(projectCategories) as [ProjectCategory, ...ProjectCategory[]];
