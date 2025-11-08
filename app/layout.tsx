import { Vazirmatn } from 'next/font/google';
import { Noto_Kufi_Arabic } from 'next/font/google';
import { Welcome } from './ui/homepage/Welcome';
import { AuthProvider } from './context/AuthContext';

const noto_kufi_arabic = Noto_Kufi_Arabic({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['arabic', 'math', 'symbols']
})

const vazirmatn = Vazirmatn({
  display: 'swap',
  weight: ['400', '900'],
  subsets: ['arabic', 'latin']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_kufi_arabic.className} antialiased min-h-screen bg-gray-950 flex flex-col items-center justify-start`}>
        <AuthProvider>
          <main className='w-full  max-w-lg flex flex-col items-center justify-center'>
            <Welcome />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
