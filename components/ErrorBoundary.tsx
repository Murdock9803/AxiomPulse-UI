'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error,
      errorInfo,
    })
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.reload()
  }

  private handleGoHome = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.href = '/'
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#06070B] flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-[#111] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-b border-gray-800 p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">Something went wrong</h1>
                  <p className="text-gray-400 text-sm">
                    We encountered an unexpected error. Don't worry, we're on it!
                  </p>
                </div>
              </div>
            </div>

            {/* Error Details */}
            <div className="p-6 space-y-4">
              {this.state.error && (
                <div className="bg-[#06070B] border border-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-red-400 mb-2">Error Message</h3>
                  <p className="text-sm text-gray-300 font-mono break-words">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}

              {this.state.errorInfo && (
                <details className="group">
                  <summary className="cursor-pointer text-sm font-medium text-gray-400 hover:text-white transition list-none">
                    <div className="flex items-center gap-2 bg-[#06070B] border border-gray-800 rounded-lg p-4">
                      <span>View Stack Trace</span>
                      <svg
                        className="w-4 h-4 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="mt-2 bg-[#06070B] border border-gray-800 rounded-lg p-4">
                    <pre className="text-xs text-gray-400 overflow-x-auto whitespace-pre-wrap font-mono">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                </details>
              )}
            </div>

            {/* Actions */}
            <div className="border-t border-gray-800 p-6 bg-[#06070B]/50">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={this.handleReset}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-lg hover:shadow-blue-500/20"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reload Page
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#111] hover:bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 text-white font-semibold rounded-lg transition"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </button>
              </div>
              <p className="text-center text-xs text-gray-500 mt-4">
                If this problem persists, please contact support
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
