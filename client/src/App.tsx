import { useState } from 'react'
import Search from './components/Search'
import Button from './components/Button'

const App = () => {
  const [url, setUrl] = useState('')

  const handleSubmit = () => {
    if (url.trim()) {
      console.log('Submitting URL:', url)
      // Here you can add the logic to extract content from the URL
      alert(`Đang trích xuất nội dung từ: ${url}`)
    } else {
      alert('Vui lòng nhập URL hợp lệ')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        {/* Header with title and icon */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-blue-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <h1 className="text-2xl font-bold text-gray-800">
              Trích xuất nội dung website từ URL
            </h1>
          </div>
          <p className="text-gray-600 text-sm">
            Nhập URL website để trích xuất nội dung
          </p>
        </div>

        {/* Search and Button */}
        <div className="space-y-4">
          <Search
            value={url}
            onChange={setUrl}
            placeholder="https://example.com"
          />
          <div className="flex justify-center">
            <Button
              onClick={handleSubmit}
              disabled={!url.trim()}
            >
              Trích xuất nội dung
            </Button>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Hệ thống sẽ phân tích và trích xuất nội dung chính từ website
          </p>
        </div>
      </div>
    </div>
  )
}

export default App