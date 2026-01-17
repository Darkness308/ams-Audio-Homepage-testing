import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Section Error:', error, errorInfo)
    this.props.onError?.(error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="py-16 px-6 text-center">
          <div className="max-w-md mx-auto bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="text-orange-500 text-4xl mb-4">⚠</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Inhalt konnte nicht geladen werden
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Ein Fehler ist aufgetreten. Bitte laden Sie die Seite neu.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Erneut versuchen
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Loading fallback for lazy loaded sections
export function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" />
      </div>
    </div>
  )
}
