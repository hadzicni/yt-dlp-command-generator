import { motion } from 'framer-motion'

function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                marginTop: '3rem',
                padding: '1rem',
                textAlign: 'center',
                fontSize: '0.9rem',
                color: '#8b949e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Built with ❤️ using yt-dlp
        </motion.footer>
    )
}

export default Footer
