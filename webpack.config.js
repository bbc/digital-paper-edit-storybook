// based on https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f
// and http://jasonwatmore.com/post/2018/04/14/react-npm-how-to-publish-a-react-component-to-npm
const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    Breadcrumb: './packages/components/Breadcrumb/index.js',
    CustomAlert: './packages/components/CustomAlert/index.js',
    FormModal: './packages/components/FormModal/index.js',
    ItemForm: './packages/components/ItemForm/index.js',
    List: './packages/components/List/index.js',
    SearchBar: './packages/components/List/SearchBar/index.js',
    PreviewCanvas: './packages/components/PreviewCanvas/index.js',
    VideoContextPreview: './packages/components/PreviewCanvas/VideoContextPreview/index.js',
    VideoContextProgressBar: './packages/components/PreviewCanvas/VideoContextPreview/VideoContextProgressBar.js',
    Controls: './packages/components/PreviewCanvas/Controls.js',
    Filler: './packages/components/PreviewCanvas/Filler.js',
    ProgressBar: './packages/components/PreviewCanvas/ProgressBar.js',
    ProgrammeScriptContainer: './packages/components/ProgrammeScriptContainer/index.js',
    ProgrammeElements: './packages/components/ProgrammeScriptContainer/ProgrammeElements/index.js',
    Note: './packages/components/ProgrammeScriptContainer/ProgrammeElements/Note.js',
    PaperCut: './packages/components/ProgrammeScriptContainer/ProgrammeElements/PaperCut.js',
    SortableHandle: './packages/components/ProgrammeScriptContainer/ProgrammeElements/SortableHandle.js',
    SortableItem: './packages/components/ProgrammeScriptContainer/ProgrammeElements/SortableItem.js',
    TitleHeading: './packages/components/ProgrammeScriptContainer/ProgrammeElements/TitleHeading.js',
    VoiceOver: './packages/components/ProgrammeScriptContainer/ProgrammeElements/VoiceOver.js',
    SimpleCard: './packages/components/SimpleCard/index.js',
    TranscriptCard: './packages/components/TranscriptCard/index.js',
    TranscriptForm: './packages/components/TranscriptForm/index.js',
  },
  output: {
    path: path.resolve('dist'),
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
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'packages'),
        // TODO: because it uses entry point to determine graph of dependencies, might not be needed to exclude test ans sample files?
        exclude: /(node_modules|bower_components|build|dist|demo|.storybook)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env', '@babel/preset-react' ]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    }
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
  }
};
