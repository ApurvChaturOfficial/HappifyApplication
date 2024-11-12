import apiConnection from "@/aConnection/cAPIConnection";


const questionAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    questionListAPI: builder.query({
      query: () => ({
        url: `question/list/`,
        method: "GET"
      }),
      providesTags: ["questionList"]
    }),

    questionCreateAPI: builder.mutation({
      query: (data) => ({
        url: `question/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["questionList"]
    }),

    questionRetrievePI: builder.query({
      query: (data) => ({
        url: `question/retrieve/${data.params._id}`,
        method: "GET",
      })
    }),

    questionUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `question/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: ["questionList"]
    }),

    questionDeleteAPI: builder.mutation({
      query: (data) => (
        console.log("first"), {
        url: `question/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["questionList"]
    }),

  })
})

export default questionAPIEndpoint;
