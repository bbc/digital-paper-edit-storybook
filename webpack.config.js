// based on https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f
// and http://jasonwatmore.com/post/2018/04/14/react-npm-how-to-publish-a-react-component-to-npm
const path = require('path');
console.log(__dirname)

module.exports = {
  devtool: 'source-map',
  entry: {
    Breadcrumb: './src/Breadcrumb/index.js',
    CustomAlert: './src/CustomAlert/index.js',
    FormModal: './src/FormModal/index.js',
    ItemForm: './src/ItemForm/index.js',
    List: './src/List/index.js',
    SearchBar: './src/SearchBar/index.js',
    PreviewCanvas: './src/PreviewCanvas/index.js',
    VideoContextPreview: './src/PreviewCanvas/VideoContextPreview/index.js',
    VideoContextProgressBar:
      './src/PreviewCanvas/VideoContextPreview/VideoContextProgressBar.js',
    Controls: './src/PreviewCanvas/Controls.js',
    Filler: './src/PreviewCanvas/Filler.js',
    ProgressBar: './src/PreviewCanvas/ProgressBar.js',
    ProgrammeScriptContainer: './src/ProgrammeScriptContainer/index.js',
    ProgrammeElements:
      './src/ProgrammeScriptContainer/ProgrammeElements/index.js',
    Note: './src/ProgrammeScriptContainer/ProgrammeElements/Note.js',
    PaperCut: './src/ProgrammeScriptContainer/ProgrammeElements/PaperCut.js',
    SortableHandle:
      './src/ProgrammeScriptContainer/ProgrammeElements/SortableHandle.js',
    SortableItem:
      './src/ProgrammeScriptContainer/ProgrammeElements/SortableItem.js',
    TitleHeading:
      './src/ProgrammeScriptContainer/ProgrammeElements/TitleHeading.js',
    VoiceOver: './src/ProgrammeScriptContainer/ProgrammeElements/VoiceOver.js',
    SimpleCard: './src/SimpleCard/index.js',
    TranscriptCard: './src/TranscriptCard/index.js',
    TranscriptForm: './src/TranscriptForm/index.js',
    ProgressBar: './src/ProgressBar/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.m?(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        // TODO: because it uses entry point to determine graph of dependencies, might not be needed to exclude test ans sample files?
        exclude: /(node_modules|bower_components|build|dist|demo|.storybook|storybook-static)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/preset-env', '@babel/preset-react' ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'react-router': path.resolve(__dirname, './node_modules/react-router'),
      'react-router-dom': path.resolve(
        __dirname,
        './node_modules/react-router-dom'
      )
    }
  },
  externals: {
    // Don't bundle react or react-dom or react-router
    react: 'react',
    'react-dom': 'react-dom',
    'react-router': 'react-router',
    'react-router-dom': 'react-router-dom'
  }
};
